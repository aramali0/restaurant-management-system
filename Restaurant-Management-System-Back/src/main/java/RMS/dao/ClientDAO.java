package RMS.dao;

import RMS.entity.Client;
import RMS.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface ClientDAO extends JpaRepository<Client, Long> {
}
