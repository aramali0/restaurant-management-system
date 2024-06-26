package RMS.dao;

import RMS.Enums.UserRole;
import RMS.entity.Client;
import RMS.entity.Personne;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;

@CrossOrigin
@Repository
//@RequestMapping("/api/admin")
public interface ClientDAO extends JpaRepository<Client, Long> {
    @Query("SELECT c FROM Client c WHERE c.nomPersonne LIKE %:nomPersonne%")
    Page<Client> findClientsByNomPersonne(@Param("nomPersonne") String nomPersonne, Pageable pageable);

    Optional<Client> findFirstByEmail(String email);
    Personne findByUserRole(UserRole userRole);

}
