package medical.app.app.DTOs;

import java.util.Optional;
import java.util.UUID;

public record UserDTOs(
        String name,
        String email,
        String password,
        String especialidade,
        Optional<String> imageURL
        ) {
}
