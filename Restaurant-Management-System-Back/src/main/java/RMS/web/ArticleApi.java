package RMS.web;

import RMS.dao.ArticleDAO;
import RMS.dao.CommandeDAO;
import RMS.entity.Article;
import RMS.entity.Commande;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v2")
public class ArticleApi {

    @Autowired
    ArticleDAO articleDAO;
    @Autowired
    CommandeDAO commandeDAO;

    @PostMapping("/article")
    public String saveArticle(@RequestBody Article article) {
        articleDAO.save(article);
        return "Article Saved : " + article ;
    }
    @PostMapping("/article/{id}")
    public String saveArticle(@PathVariable Long id) {

        List<Commande> relatedCommandeArticles = commandeDAO.findCommandesByArticlesIdArticle(id);


        for (Commande commandeArticle : relatedCommandeArticles) {
            commandeDAO.delete(commandeArticle);
        }

        articleDAO.deleteById(id);

        return "Article deleted : " + id;
    }



}
