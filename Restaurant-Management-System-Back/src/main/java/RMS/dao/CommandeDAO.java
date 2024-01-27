package RMS.dao;

import RMS.entity.Article;
import RMS.entity.Categorie;
import RMS.entity.Commande;
import RMS.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin
public interface CommandeDAO extends JpaRepository<Commande, Long> {
    public List<Commande> findCommandesByClientNomPersonne(@Param("name") String name);

}
