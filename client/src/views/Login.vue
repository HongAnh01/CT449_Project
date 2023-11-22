<template>
    <v-container fill-height>
        <v-row align="center">
            <!-- Column for Image/Content -->
            <v-col cols="12" md="6" class="image-column">
                <v-img src="../assets/login.jpg" contain></v-img>
            </v-col>
            <!-- Column for Registration Form -->
            <v-col cols="12" md="6">
                <v-card class="elevation-12">
                    <v-card-title class="justify-center">Login</v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="loginUser">
                            <!-- Email Input -->
                            <v-text-field v-model="email" :rules="emailRules" label="Email" outlined></v-text-field>
                            <!-- Password Input -->
                            <v-text-field v-model="password" :rules="passwordRules" label="Password" type="password"
                                outlined></v-text-field>
                            <div class="error-message">{{ Errors[0] }}</div>
                            <!-- Login Button -->
                            <v-btn type="submit" class="login-btn" color="success" block
                                style="padding-top: 24px; padding-bottom: 24px;">Login</v-btn>
                        </v-form>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <span>Need an account? <router-link to="/register">Register!</router-link></span>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import API from '../api'
import { EventBus } from '../event-bus';
export default {
    data() {
        return {
            email: '',
            password: '',
            Errors: [],
        };
    },
    computed: {
        usernameRules() {
            return [
                value => !!value || 'Username is required',
                value => (value && value.length >= 6) || 'Username must be at least 6 characters'
            ];
        },
        emailRules() {
            return [
                value => !!value || 'Email is required',
                value => /.+@.+\..+/.test(value) || 'Email must be valid'
            ];
        },
        passwordRules() {
            return [
                value => !!value || 'Password is required',
                value => (value && value.length >= 8) || 'Password must be at least 8 characters'
            ];
        }
    },
    methods: {
        async loginUser() {
            try {
                const userData = {
                    email: this.email,
                    password: this.password,
                };

                const response = await API.loginUser(userData);
                const loggedInUserData = response.data;
                // Xử lý sau khi đăng nhập thành công
                EventBus.$emit('loggedIn', { isLoggedIn: true });
                this.$router.push('/home');
            } catch (error) {
                console.error(error.message);
                if (error.message.includes('email')) {
                    this.Errors = ['Email or password is incorrect!']; // Thông báo lỗi cho trường email
                } else if (error.message.includes('password')) {
                    this.Errors = ['Email or password is incorrect!']; // Thông báo lỗi cho trường password
                } else {
                    this.Errors = []; // Đặt lại thông báo lỗi về rỗng nếu không phải email hoặc password
                }
            }
        }
    },

}

</script>
  
<style scoped>
.error-message {
    color: red;
    font-size: 12px;
    margin-top: 4px;
}
</style>
  