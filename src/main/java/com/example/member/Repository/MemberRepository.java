package com.example.member.Repository;

import com.example.member.entity.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<MemberEntity, Long>
{
    // 객체를 넘길 때, 반드시 entity객체로 넘겨야 함.
    // Service 클래스에서 DTO객체로 받았으므로, Service객체에서 DTO객체를 Entity객체로 바꾸어 전달

    // 이메일로 회원 정보 조회 (select * from member_table where userId =?)
    Optional<MemberEntity> findByUserId(String userId);
}
