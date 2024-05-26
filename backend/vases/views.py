# vases/views.py
from rest_framework import viewsets
from .models import Vase
from .serializers import VaseSerializer

class VaseView(viewsets.ModelViewSet):
    queryset = Vase.objects.all()
    serializer_class = VaseSerializer

class VaseSearchView(viewsets.ReadOnlyModelViewSet):
    queryset = Vase.objects.all()
    serializer_class = VaseSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        fabric = self.request.query_params.get('fabric')
        technique = self.request.query_params.get('technique')
        painter = self.request.query_params.get('painter')
        type = self.request.query_params.get('type')
        collection = self.request.query_params.get('collection')
        provenance = self.request.query_params.get('provenance')
        height = self.request.query_params.get('height')
        diameter = self.request.query_params.get('diameter')

        if fabric:
            queryset = queryset.filter(fabric=fabric)
        if technique:
            queryset = queryset.filter(technique=technique)
        if painter:
            queryset = queryset.filter(painter=painter)
        if type:
            queryset = queryset.filter(type=type)
        if collection:
            queryset = queryset.filter(collection=collection)
        if provenance:
            queryset = queryset.filter(provenance=provenance)
        if height:
            queryset = queryset.filter(height=height)
        if diameter:
            queryset = queryset.filter(diameter=diameter)

        return queryset