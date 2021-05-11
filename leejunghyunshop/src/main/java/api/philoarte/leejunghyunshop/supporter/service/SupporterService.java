package api.philoarte.leejunghyunshop.supporter.service;

import api.philoarte.leejunghyunshop.supporter.domain.Supporter;

import java.util.List;

public interface SupporterService {
    String signup(Supporter supporter);
    Supporter signin(Supporter supporter);
    //Supporter signin(Supporter supporter);
    List<Supporter> findALl();
}
