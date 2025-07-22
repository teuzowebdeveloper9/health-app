package medical.app.app.controllers;

import medical.app.app.Services.SearchHistoryService;
import medical.app.app.entitys.SearchHistory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/search-history")
@CrossOrigin(origins = "http://localhost:8081")
public class SearchHistoryController {
    private final SearchHistoryService service;

    public SearchHistoryController(SearchHistoryService service) {
        this.service = service;
    }

    @PostMapping("/")
    public SearchHistory saveSearch(@RequestParam UUID userId, @RequestParam String text){
        return  service.saveSearch(userId,text);
    }

    @GetMapping("/{userId}")
    public List<SearchHistory> getHistory(@PathVariable UUID userId){
        return service.findSearchsById(userId);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSearch(@PathVariable  String id){
         service.deleseSearch(id);

         return ResponseEntity.noContent().build();
    }
}
