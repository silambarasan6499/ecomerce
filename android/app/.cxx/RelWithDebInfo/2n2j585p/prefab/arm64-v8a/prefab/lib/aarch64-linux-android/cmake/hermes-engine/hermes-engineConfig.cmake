if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/mac-obs-39/.gradle/caches/transforms-3/e1925d27dfeda554a62fa91e748dc57a/transformed/jetified-hermes-android-0.72.1-release/prefab/modules/libhermes/libs/android.arm64-v8a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/mac-obs-39/.gradle/caches/transforms-3/e1925d27dfeda554a62fa91e748dc57a/transformed/jetified-hermes-android-0.72.1-release/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

