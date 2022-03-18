from rest_framework import routers
from .views import PersonViewSet,UserViewSet

router = routers.SimpleRouter()
router.register(r'person', PersonViewSet)
router.register(r'user', UserViewSet)
urlpatterns = router.urls
