from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from userauths import views as useraths_views

urlpatterns = [
    path('user/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('user/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('user/register/', useraths_views.RegisterView.as_view(), name='register'),
]