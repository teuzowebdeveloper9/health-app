package medical.app.app.Services;

import medical.app.app.entitys.SearchHistory;
import medical.app.app.repositorys.SearchHistoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class SearchHistoryService {

    private  final SearchHistoryRepository repository;

    public SearchHistoryService(SearchHistoryRepository repository) {
        this.repository = repository;
    }

    public SearchHistory saveSearch(UUID userId,String text){
        SearchHistory search = new SearchHistory(userId,text);

        return repository.save(search);
    }

    public List<SearchHistory> findSearchsById(UUID userId){
        return  repository.findByUserId(userId);
    }

    public void deleseSearch( String id){
        SearchHistory deleteSearch = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("search not found") );

        repository.delete(deleteSearch);
    }
}
