from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from .models import Task, UserProgress
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import TokenError

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'date_joined', 'is_superuser')

class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password_confirm = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'password_confirm')

    def validate(self, attrs):
        if attrs['password'] != attrs['password_confirm']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        if User.objects.filter(email=attrs['email']).exists():
            raise serializers.ValidationError({"email": "Email already exists."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user


class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()

    def validate(self, attrs):
        self.token = attrs['refresh']
        return attrs

    def save(self, **kwargs):
        try:
            RefreshToken(self.token).blacklist()
        except TokenError:
            self.fail('bad_token')

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
        read_only_fields = ('user', 'created_at')

class ProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProgress
        fields = '__all__'
        read_only_fields = ('user', 'updated_at')

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['email'] = serializers.EmailField(required=False)
        self.fields['username'] = serializers.CharField(required=False)

    def validate(self, attrs):
        # Support login by email
        if 'email' in attrs and 'username' not in attrs:
            email = attrs.get('email')
            try:
                user = User.objects.get(email=email)
                attrs['username'] = user.username
            except User.DoesNotExist:
                raise serializers.ValidationError({"detail": "No active account found with the given credentials"})
            except User.MultipleObjectsReturned:
                 raise serializers.ValidationError({"detail": "Multiple accounts found with this email"})

        # Ensure password is provided
        if 'password' not in attrs:
             raise serializers.ValidationError({"password": "Password is required"})

        try:
            data = super().validate(attrs)
        except TokenError as e:
            raise serializers.ValidationError({"detail": str(e)})

        data['user'] = UserSerializer(self.user).data
        return data
