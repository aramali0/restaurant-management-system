package RMS.dao;

import RMS.entity.Commande;
import RMS.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface CommandeDAO extends JpaRepository<Commande, Long> {
}
