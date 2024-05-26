from rest_framework import serializers
from .models import Vase

class VaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vase
        fields = '__all__'