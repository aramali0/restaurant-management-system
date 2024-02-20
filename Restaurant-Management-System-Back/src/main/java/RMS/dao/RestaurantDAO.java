package RMS.dao;

import RMS.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin
//@RequestMapping("/api/admin")
@Repository
public interface RestaurantDAO extends JpaRepository<Restaurant, Long> {
}
