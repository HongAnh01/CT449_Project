<!-- Register.vue -->
<template>
    <v-container fill-height>
        <v-row align="center">
            <v-col cols="6">
                <!-- Thành phần chứa hình ảnh hoặc nội dung bên trái -->
                <v-img src="../assets/admin_login.jpg" contain></v-img>
            </v-col>
            <v-col cols="6">
                <!-- Form đăng ký ở đây -->
                <v-form @submit.prevent="registerUser">
                    <!-- Các trường nhập thông tin -->
                    <v-text-field v-model="username" label="Username"></v-text-field>
                    <v-text-field v-model="email" label="Email"></v-text-field>
                    <v-text-field v-model="password" label="Password" type="password"></v-text-field>
                    <!-- Nút đăng ký -->
                    <v-btn type="submit" color="primary">Register</v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>
  
  
<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            password: ''
        };
    },
    methods: {
        async registerUser() {
            try {
                const response = await fetch('/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.username,
                        email: this.email,
                        password: this.password
                    })
                });

                if (response.ok) {
                    // Đăng ký thành công, có thể thực hiện hành động sau đây
                    console.log('Registration successful');
                } else {
                    const errorMessage = await response.text();
                    console.error('Registration failed:', errorMessage);
                }
            } catch (error) {
                console.error('Error during registration:', error);
            }
        }
    }
};
</script>
  
<style scoped>
/* CSS specific to this component */
</style>
  