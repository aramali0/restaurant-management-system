package RMS.dao;

import RMS.Enums.UserRole;
import RMS.entity.Client;
import RMS.entity.Personne;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PersonneDAO extends JpaRepository<Personne,Long> {
    Optional<Personne> findFirstByEmail(String email);
    Personne findByUserRole(UserRole userRole);
}
