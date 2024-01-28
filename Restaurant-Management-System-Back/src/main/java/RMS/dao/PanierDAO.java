package RMS.dao;

import RMS.entity.Panier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface PanierDAO extends JpaRepository<Panier, Long> {

}
