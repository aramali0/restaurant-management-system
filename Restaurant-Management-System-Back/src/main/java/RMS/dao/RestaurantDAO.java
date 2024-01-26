package RMS.dao;

import RMS.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface RestaurantDAO extends JpaRepository<Restaurant, Long> {
}
