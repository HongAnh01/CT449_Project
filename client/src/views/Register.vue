<!-- Register.vue -->
<template>
    <v-container fill-height>
        <v-row align="center">
            <!-- Column for Image/Content -->
            <v-col cols="12" md="6" class="image-column">
                <v-img src="../assets/resgiter.svg" contain></v-img>
            </v-col>
            <!-- Column for Registration Form -->
            <v-col cols="12" md="6">
                <v-card class="elevation-12">
                    <v-card-title class="justify-center">Register</v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="registerUser">
                            <!-- Username Input -->
                            <v-text-field v-model="username" :rules="usernameRules" label="Username"
                                outlined></v-text-field>
                            <!-- Email Input -->
                            <v-text-field v-model="email" :rules="emailRules" label="Email" outlined></v-text-field>
                            <!-- Password Input -->
                            <v-text-field v-model="password" :rules="passwordRules" label="Password" type="password"
                                outlined></v-text-field>
                            <!-- Register Button -->
                            <v-btn type="submit" class="reg-btn" color="success" block
                                style="padding-top: 24px; padding-bottom: 24px;">Register</v-btn>
                        </v-form>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <span>Have an account? <router-link to="/">Go to login</router-link></span>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
  
<script>
import API from '../api'
export default {
    data() {
        return {
            username: '',
            email: '',
            password: ''
        };
    },
    computed: {
        usernameRules() {
            return [
                value => !!value || 'Username is required',
                value => (value && value.length >= 6) || 'Username must be at least 6 characters'
                // Các quy tắc khác có thể được thêm vào ở đây
            ];
        },
        emailRules() {
            return [
                value => !!value || 'Email is required',
                value => /.+@.+\..+/.test(value) || 'Email must be valid'
                // Các quy tắc khác có thể được thêm vào ở đây
            ];
        },
        passwordRules() {
            return [
                value => !!value || 'Password is required',
                value => (value && value.length >= 8) || 'Password must be at least 8 characters'
                // Các quy tắc khác có thể được thêm vào ở đây
            ];
        }
    },
    methods: {
        async registerUser() {
            try {
                const userData = {
                    username: this.username,
                    email: this.email,
                    password: this.password
                };

                const response = await API.registerUser(userData);

                console.log(response); // Hiển thị thông báo đăng ký thành công
                alert(response);
                this.$router.push('/');
            } catch (error) {
                console.error(error.message); // Hiển thị thông báo lỗi
            }
        }
    }
};
</script>
  

  