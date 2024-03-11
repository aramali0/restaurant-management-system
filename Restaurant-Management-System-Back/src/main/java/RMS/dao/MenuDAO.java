package RMS.dao;

import RMS.entity.Menu;
import RMS.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@Repository
public interface MenuDAO extends JpaRepository<Menu, Long> {
}
