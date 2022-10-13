package in.nareshit.raghu.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.nareshit.raghu.entity.Coupon;
import in.nareshit.raghu.repo.CouponRepository;
import in.nareshit.raghu.service.ICouponService;

/**
 * @author:RAGHU SIR 
 *  Generated F/w:SHWR-Framework 
 */
@Service
public class CouponServiceImpl implements ICouponService {
	@Autowired
	private CouponRepository repo;

	
	public Long saveCoupon(Coupon coupon) {
		return repo.save(coupon).getId();
	}

	
	public void updateCoupon(Coupon coupon) {
		repo.save(coupon);
	}

	public void deleteCoupon(Long id) {
		repo.deleteById(id);
	}
	
	public Coupon getOneCoupon(Long id) {
		return repo.findById(id).get();
	}
	
	public List<Coupon> getAllCoupons() {
		return repo.findAll();
	}
	
	public Optional<Coupon> findByCode(String code) {
		return repo.findByCode(code);
	}
}
