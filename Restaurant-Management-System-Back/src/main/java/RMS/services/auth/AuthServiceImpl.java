package RMS.services.auth;

import RMS.Enums.UserRole;
import RMS.dao.AdminDAO;
import RMS.dao.ClientDAO;
import RMS.dto.SignupRequest;
import RMS.dto.UserDto;
import RMS.entity.Admin;
import RMS.entity.Client;
import RMS.entity.Personne;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{

    private final ClientDAO clientDAO;
    private final AdminDAO adminDAO;




    @PostConstruct
    public void createAdminAccount(){
        Admin adminAccount = adminDAO.findByUserRole(UserRole.ADMIN);
        if(adminAccount == null){
            Admin newAdminAccount = new Admin("Admin","admin@test.com",new BCryptPasswordEncoder().encode("admin")
            ,"000000000",UserRole.ADMIN,true);
            adminDAO.save(newAdminAccount);
            System.out.println("Admin account created successfully");


        }
    }

    @Override
    public UserDto createCustomer(SignupRequest signupRequest) {
        Client user = new Client();
        user.setNomPersonne(signupRequest.getName());
        user.setEmail(signupRequest.getEmail());
        user.setMotPass(new BCryptPasswordEncoder().encode(signupRequest.getPassword()));
        user.setUserRole(UserRole.CUSTOMER);
        user.setNumTelel(signupRequest.getNum());
        user.setAddress(signupRequest.getAddress());
        user.setStatus(true);
        Client createdUser = clientDAO.save(user);
        UserDto userDto = new UserDto();
        userDto.setId(createdUser.getIdPersonne());
        return userDto;
    }

    @Override
    public boolean hasCustomerWithEmail(String email) {
        return clientDAO.findFirstByEmail(email).isPresent();
    }
}
