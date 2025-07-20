package medical.app.app.repositorys;

import medical.app.app.entitys.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepositorys extends JpaRepository<UserEntity, UUID> {


    Optional<UserEntity> findByEmail(String email);

    List<UserEntity> findByNameContainingIgnoreCase(String name);
}
