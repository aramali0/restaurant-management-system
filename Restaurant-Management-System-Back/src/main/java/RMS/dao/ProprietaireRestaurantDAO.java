package RMS.dao;

import RMS.entity.ProprietaireRestu;
import RMS.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProprietaireRestaurantDAO extends JpaRepository<ProprietaireRestu, Long> {
}
