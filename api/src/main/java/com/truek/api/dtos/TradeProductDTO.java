package com.truek.api.dtos;

import com.truek.api.entity.TradeStatus;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record TradeProductDTO(
        @NotBlank
        String name
) {
}
