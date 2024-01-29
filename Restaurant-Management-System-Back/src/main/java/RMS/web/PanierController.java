package RMS.web;

import RMS.dao.ArticleDAO;
import RMS.dao.PanierDAO;
import RMS.entity.Article;
import RMS.entity.Panier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api-c/paniers")
public class PanierController {
    @Autowired
    PanierDAO panierDAO;
    @Autowired
    ArticleDAO articleDAO;
    @PostMapping("/panier/{idArticle}/{idPanier}")
    public void addArticleToPanier(@PathVariable(name = "idArticle") Long idArticle,@PathVariable(name = "idPanier") Long idPanier){
        Panier panier = panierDAO.findById(idPanier).get();
        Article article = articleDAO.findById(idArticle).get();
        panier.getArticles().add(article);
        article.getPaniers().add(panier);
        panierDAO.save(panier);
        articleDAO.save(article);
        panierDAO.save(panier);
    }

    @DeleteMapping("/panier/{idArticle}/{idPanier}")
    public void deletArticleFromPanier(@PathVariable(name = "idArticle") Long idArticle,@PathVariable(name = "idPanier") Long idPanier){
        Panier panier = panierDAO.findById(idPanier).get();
        Article article = articleDAO.findById(idArticle).get();
        panier.getArticles().remove(article);
        article.getPaniers().remove(panier);
        articleDAO.save(article);
        panierDAO.save(panier);
    }
}
