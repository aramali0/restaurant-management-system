package RMS.web;

import RMS.Utils.JWTUtil;
import RMS.dao.ClientDAO;
import RMS.dto.AuthenticationRequest;
import RMS.dto.AuthenticationResponse;
import RMS.dto.SignupRequest;
import RMS.dto.UserDto;
import RMS.entity.Client;
import RMS.services.auth.AuthService;
import RMS.services.jwt.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin
public class AuthController {

    private final AuthService authService;
    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final JWTUtil jwtUtil;
    private final ClientDAO userRepo;

    @PostMapping("/signup")
    public ResponseEntity<?> signupCustomer(@RequestBody SignupRequest signupRequest){
        if (authService.hasCustomerWithEmail(signupRequest.getEmail()))
            return new ResponseEntity<>("Customer already exist with this email",HttpStatus.NOT_ACCEPTABLE);
       UserDto createdCustomerDto = authService.createCustomer(signupRequest);

       if (createdCustomerDto == null)
           return new ResponseEntity<>("Customer not created , Come again later", HttpStatus.BAD_REQUEST);

       return new ResponseEntity<>(createdCustomerDto,HttpStatus.CREATED);

    }

    @PostMapping("/login")
    public AuthenticationResponse createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws
            Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword()));
        }catch (BadCredentialsException e)
        {
            throw new BadCredentialsException("Incorrect username or password");

        }
        final UserDetails userDetails = userService.userDetailsService().loadUserByUsername(authenticationRequest.getEmail());
        Optional<Client> optionalUser = userRepo.findFirstByEmail(userDetails.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails);
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();
        if(optionalUser.isPresent())
        {
            authenticationResponse.setJwt(jwt);
            authenticationResponse.setUserId(optionalUser.get().getIdPersonne());
            authenticationResponse.setUserRole(optionalUser.get().getUserRole());
        }
        return authenticationResponse;
    }


}
