package medical.app.app.entitys;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column
    private String name;

    @Column
    private  String email;

    @Column
    private  String password;

    @Column
    private  String especialidade;

    @Column
    private String imageURL;



    public UserEntity() {
    }

    public UserEntity(UUID id, String name, String email, String password, String especialidade, String imageURL) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.especialidade = especialidade;
        this.imageURL = imageURL;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEspecialidade() {
        return especialidade;
    }

    public void setEspecialidade(String especialidade) {
        this.especialidade = especialidade;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }
}
