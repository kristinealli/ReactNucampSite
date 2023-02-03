export const validateUserLoginForm = (values) => {
    const { username, password } = values; 
    const errors = {};
    
    if (!username){
        errors.username = 'Required';
        } else if (values.username.length < 6) {
        errors.username = 'Username must be at least 6 characters.'
        } else if (values.username.length > 15) {
        errors.username = 'Username cannot be more than 15 characters.'
        }
        
    if (!password){
        errors.password = 'Required';
        } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters.'
        }
        
    return errors;
};


