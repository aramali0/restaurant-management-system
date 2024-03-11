package RMS.services.jwt;

import RMS.dao.AdminDAO;
import RMS.dao.ClientDAO;
import RMS.dao.PersonneDAO;
import RMS.dao.ProprietaireRestaurantDAO;
import RMS.entity.Admin;
import RMS.entity.Client;
import RMS.entity.ProprietaireRestu;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{


    private final PersonneDAO personneDAO;

    @Override
    public UserDetailsService userDetailsService()
    {
        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
                return personneDAO.findFirstByEmail(username)
                        .orElseThrow(() -> new UsernameNotFoundException("User not found"));
            }
        };
    }
}
