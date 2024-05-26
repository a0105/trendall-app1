from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from vases.views import VaseView, VaseSearchView
from rest_framework import routers

router = routers.DefaultRouter()
router.register('', VaseView, basename='vaseview')
router.register('search', VaseSearchView, basename='vase-search')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)