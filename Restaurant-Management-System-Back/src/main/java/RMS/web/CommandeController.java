package RMS.web;

import RMS.dao.ArticleDAO;
import RMS.dao.CommandeDAO;
import RMS.entity.Article;
import RMS.entity.Commande;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api-c/commandes")
public class CommandeController {
    @Autowired
    CommandeDAO commandeDAO;
    @Autowired
    ArticleDAO articleDAO;
    @CrossOrigin
    @PostMapping("/commande/{idArticle}/{idCommande}")
    public void addArticleToCommande(@PathVariable(name = "idArticle") Long idArticle, @PathVariable(name = "idCommande") Long idCommande){
        Article article = articleDAO.findById(idArticle).get();
        Commande commande = commandeDAO.findById(idCommande).get();
        article.getCommandes().add(commande);
        commande.getArticles().add(article);
        commandeDAO.save(commande);
        articleDAO.save(article);
    }
}
