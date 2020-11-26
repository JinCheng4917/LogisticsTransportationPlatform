package api.platform.Service;

import api.platform.Enyity.Owner;
import api.platform.Repository.OwnerRepository;
import org.springframework.stereotype.Service;

@Service
public class OwnerServiceImpl implements OwnerService{
    private OwnerRepository ownerRepository;

    public OwnerServiceImpl(OwnerRepository ownerRepository){
        this.ownerRepository = ownerRepository;
    }

    @Override
    public Owner getOwnerByUserId(Long id) {
        return this.ownerRepository.findOwnerByUserId(id);
    }
}
