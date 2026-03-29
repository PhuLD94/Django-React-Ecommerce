from django.contrib import admin
from userauths.models import User, Profile
# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display = ['email', 'username', 'full_name', 'phone_number']

class ProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'username', 'gender', 'country']
    search_fields = ['user__username', 'date']
    list_filter = ['date']

    def username(self, obj):
        return obj.user.username
    username.admin_order_field = 'user__username'
    username.short_description = 'Username'

admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)