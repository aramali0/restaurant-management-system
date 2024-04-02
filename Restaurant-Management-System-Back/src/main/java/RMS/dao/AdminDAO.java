package RMS.dao;

import RMS.Enums.UserRole;
import RMS.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminDAO extends JpaRepository<Admin,Long> {

    Admin findByUserRole(UserRole userRole);
    Optional<Admin> findFirstByEmail(String email);
}
