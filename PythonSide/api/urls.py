from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('test/', views.testEndPoint, name='test'),
    path('', views.getRoutes),

     path('profile/new/<int:user_id>', views.ProfileViewInfo.as_view(), name='item_create'),  # Create a new item
    path('profile/<int:user_id>', views.ShowUserProfile, name='user_items'),
]
