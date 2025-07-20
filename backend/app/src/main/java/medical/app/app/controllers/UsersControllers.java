package medical.app.app.controllers;

import medical.app.app.DTOs.LoginUserDto;
import medical.app.app.DTOs.UserDTOs;
import medical.app.app.Services.UserServices;
import medical.app.app.entitys.UserEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:8081")
public class UsersControllers {
    private final UserServices services;

    public UsersControllers(UserServices services) {
        this.services = services;
    }


    @GetMapping("/")
    public List<UserEntity> getUsers(){
        return services.findAllUser();
    }

    @PostMapping("/")
    public ResponseEntity<UserEntity> createUser(@RequestBody  UserDTOs userDTO){
        UserEntity user = services.createUser(userDTO);

        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }

    @PatchMapping("/{id}")
    public  ResponseEntity<UserEntity> updateUser(
            @PathVariable UUID  id,
            @RequestBody UserDTOs dto
            ){
        UserEntity updateUser = services.editUser(id,dto);

        return ResponseEntity.ok(updateUser);

    }

    @GetMapping("/search/{name}")
    public List<UserEntity> searchUser(@PathVariable String name){
        return services.findUserByName(name);
    }

    @PostMapping("/login")
    public ResponseEntity<UserEntity> login(@RequestBody  LoginUserDto loginDTO){
        UserEntity loginUser =  services.login(loginDTO);

        return  ResponseEntity.ok(loginUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable UUID id){
        services.deleteUser(id);

        return ResponseEntity.noContent().build();
    }
}
