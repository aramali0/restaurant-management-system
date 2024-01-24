package RMS.dao;

import RMS.entity.Client;
import RMS.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientDAO extends JpaRepository<Client, Long> {
}
