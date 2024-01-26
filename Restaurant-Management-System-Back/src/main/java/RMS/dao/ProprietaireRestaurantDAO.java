package RMS.dao;

import RMS.entity.ProprietaireRestu;
import RMS.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface ProprietaireRestaurantDAO extends JpaRepository<ProprietaireRestu, Long> {
}
