package RMS.dao;

import RMS.Enums.UserRole;
import RMS.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminDAO extends JpaRepository<Admin,Long> {

    Admin findByUserRole(UserRole userRole);
}
