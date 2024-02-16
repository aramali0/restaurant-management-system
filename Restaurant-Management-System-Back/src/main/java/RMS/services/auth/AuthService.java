package RMS.services.auth;

import RMS.dto.SignupRequest;
import RMS.dto.UserDto;

public interface AuthService {

    UserDto createCustomer(SignupRequest signupRequest);
    boolean hasCustomerWithEmail(String email);

}
