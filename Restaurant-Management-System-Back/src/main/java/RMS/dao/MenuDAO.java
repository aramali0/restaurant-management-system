package RMS.dao;

import RMS.entity.Menu;
import RMS.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuDAO extends JpaRepository<Menu, Long> {
}
