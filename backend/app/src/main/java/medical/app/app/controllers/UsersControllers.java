package medical.app.app.controllers;

import medical.app.app.DTOs.UserDTOs;
import medical.app.app.Services.UserServices;
import medical.app.app.entitys.UserEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/users")
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
    public ResponseEntity<UserEntity> createUser(UserDTOs userDTO){
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

    @GetMapping("/search")
    public List<UserEntity> searchUser(String name){
        return services.findUserByName(name);
    }
}
