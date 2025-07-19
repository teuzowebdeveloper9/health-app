package medical.app.app.Services;

import medical.app.app.DTOs.LoginUserDto;
import medical.app.app.DTOs.UserDTOs;
import medical.app.app.entitys.UserEntity;
import medical.app.app.repositorys.UserRepositorys;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServices {
    private final UserRepositorys userRepositorie;

    public UserServices(UserRepositorys userRepositorie) {
        this.userRepositorie = userRepositorie;
    }

    public List<UserEntity> findAllUser(){
        return  userRepositorie.findAll();
    }

    public UserEntity createUser(UserDTOs userDTO){
        UserEntity user = new UserEntity();

        user.setEmail(userDTO.email());
        user.setName(userDTO.name());
        user.setPassword(userDTO.password());

        UserEntity userSaved = userRepositorie.save(user);

        return  userSaved;
    }

    public UserEntity login(LoginUserDto login){
     Optional<UserEntity> findUser  = userRepositorie.findByEmail(login.email());

     if (findUser.isEmpty()){
         throw  new RuntimeException("USER NOT FOUND");
     }

     UserEntity user = findUser.get();

     if (!login.password().equals(user.getPassword())){
         throw new RuntimeException("incorrect credentials");
     }

     return user;
    }

    
}
