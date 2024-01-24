package RMS.dao;

import RMS.entity.Commande;
import RMS.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommandeDAO extends JpaRepository<Commande, Long> {
}
