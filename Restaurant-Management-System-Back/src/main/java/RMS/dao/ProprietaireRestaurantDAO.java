package RMS.dao;

import RMS.Enums.UserRole;
import RMS.entity.ProprietaireRestu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
//@RequestMapping("api/admin")
@Repository
public interface ProprietaireRestaurantDAO extends JpaRepository<ProprietaireRestu, Long> {

    Optional<ProprietaireRestu> findFirstByEmail(String email);
    ProprietaireRestu findByUserRole(UserRole userRole);

}
