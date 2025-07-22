package medical.app.app.repositorys;


import medical.app.app.entitys.SearchHistory;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.UUID;

public interface SearchHistoryRepository extends MongoRepository<SearchHistory, String> {
    List<SearchHistory> findByUserId(UUID id);
}
