package RMS.dao;

import RMS.entity.Article;
import RMS.entity.Categorie;
import RMS.entity.Commande;
import RMS.entity.Restaurant;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Date;
import java.util.List;

@CrossOrigin
//@RequestMapping("/api/admin")
@Repository

public interface CommandeDAO extends JpaRepository<Commande, Long> {
    public List<Commande> findCommandesByClientNomPersonne(@Param("name") String name);
    @Query("SELECT c FROM Commande c JOIN c.articles a WHERE a.restaurant.idRestaurant = :restaurantId")
    Page<Commande> findCommandesByRestaurantId(@Param("restaurantId") Long restaurantId, Pageable pageable);

    @Query("SELECT c FROM Commande c WHERE c.date BETWEEN :startDate AND :endDate")
    List<Commande> findCommandesByDateRange(
            @Param("startDate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate,
            @Param("endDate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate
    );

    public List<Commande> findCommandesByArticlesIdArticle(@Param("idArticle") Long idArticle);

}


