/**********************************************************************/
/*   ____  ____                                                       */
/*  /   /\/   /                                                       */
/* /___/  \  /                                                        */
/* \   \   \/                                                       */
/*  \   \        Copyright (c) 2003-2009 Xilinx, Inc.                */
/*  /   /          All Right Reserved.                                 */
/* /---/   /\                                                         */
/* \   \  /  \                                                      */
/*  \___\/\___\                                                    */
/***********************************************************************/

/* This file is designed for use with ISim build 0xfbc00daa */

#define XSI_HIDE_SYMBOL_SPEC true
#include "xsi.h"
#include <memory.h>
#ifdef __GNUC__
#include <stdlib.h>
#else
#include <malloc.h>
#define alloca _alloca
#endif
static const char *ng0 = "/home/ise/D_DRIVE/Integrated-Circuits-and-Systems-Design/mux-4-to-1/design.v";
static unsigned int ng1[] = {1U, 0U};
static unsigned int ng2[] = {0U, 0U};



static void Cont_2_0(char *t0)
{
    char t3[8];
    char t4[8];
    char t6[8];
    char t22[8];
    char t36[8];
    char t43[8];
    char t88[8];
    char t97[8];
    char t98[8];
    char t100[8];
    char t116[8];
    char t130[8];
    char t137[8];
    char t180[8];
    char t183[8];
    char *t1;
    char *t2;
    char *t5;
    char *t7;
    char *t8;
    unsigned int t9;
    unsigned int t10;
    unsigned int t11;
    unsigned int t12;
    unsigned int t13;
    unsigned int t14;
    unsigned int t15;
    unsigned int t16;
    unsigned int t17;
    unsigned int t18;
    unsigned int t19;
    unsigned int t20;
    char *t21;
    char *t23;
    unsigned int t24;
    unsigned int t25;
    unsigned int t26;
    unsigned int t27;
    unsigned int t28;
    char *t29;
    char *t30;
    unsigned int t31;
    unsigned int t32;
    unsigned int t33;
    char *t34;
    char *t35;
    unsigned int t37;
    unsigned int t38;
    unsigned int t39;
    unsigned int t40;
    unsigned int t41;
    char *t42;
    unsigned int t44;
    unsigned int t45;
    unsigned int t46;
    char *t47;
    char *t48;
    char *t49;
    unsigned int t50;
    unsigned int t51;
    unsigned int t52;
    unsigned int t53;
    unsigned int t54;
    unsigned int t55;
    unsigned int t56;
    char *t57;
    char *t58;
    unsigned int t59;
    unsigned int t60;
    unsigned int t61;
    unsigned int t62;
    unsigned int t63;
    unsigned int t64;
    unsigned int t65;
    unsigned int t66;
    int t67;
    int t68;
    unsigned int t69;
    unsigned int t70;
    unsigned int t71;
    unsigned int t72;
    unsigned int t73;
    unsigned int t74;
    char *t75;
    unsigned int t76;
    unsigned int t77;
    unsigned int t78;
    unsigned int t79;
    unsigned int t80;
    char *t81;
    char *t82;
    unsigned int t83;
    unsigned int t84;
    unsigned int t85;
    char *t86;
    char *t87;
    char *t89;
    char *t90;
    char *t91;
    char *t92;
    unsigned int t93;
    unsigned int t94;
    unsigned int t95;
    unsigned int t96;
    char *t99;
    char *t101;
    char *t102;
    unsigned int t103;
    unsigned int t104;
    unsigned int t105;
    unsigned int t106;
    unsigned int t107;
    unsigned int t108;
    unsigned int t109;
    unsigned int t110;
    unsigned int t111;
    unsigned int t112;
    unsigned int t113;
    unsigned int t114;
    char *t115;
    char *t117;
    unsigned int t118;
    unsigned int t119;
    unsigned int t120;
    unsigned int t121;
    unsigned int t122;
    char *t123;
    char *t124;
    unsigned int t125;
    unsigned int t126;
    unsigned int t127;
    char *t128;
    char *t129;
    unsigned int t131;
    unsigned int t132;
    unsigned int t133;
    unsigned int t134;
    unsigned int t135;
    char *t136;
    unsigned int t138;
    unsigned int t139;
    unsigned int t140;
    char *t141;
    char *t142;
    char *t143;
    unsigned int t144;
    unsigned int t145;
    unsigned int t146;
    unsigned int t147;
    unsigned int t148;
    unsigned int t149;
    unsigned int t150;
    char *t151;
    char *t152;
    unsigned int t153;
    unsigned int t154;
    unsigned int t155;
    unsigned int t156;
    unsigned int t157;
    unsigned int t158;
    unsigned int t159;
    unsigned int t160;
    int t161;
    int t162;
    unsigned int t163;
    unsigned int t164;
    unsigned int t165;
    unsigned int t166;
    unsigned int t167;
    unsigned int t168;
    char *t169;
    unsigned int t170;
    unsigned int t171;
    unsigned int t172;
    unsigned int t173;
    unsigned int t174;
    char *t175;
    char *t176;
    unsigned int t177;
    unsigned int t178;
    unsigned int t179;
    char *t181;
    char *t182;
    char *t184;
    char *t185;
    char *t186;
    char *t187;
    unsigned int t188;
    unsigned int t189;
    unsigned int t190;
    unsigned int t191;
    unsigned int t192;
    char *t193;
    char *t194;
    char *t195;
    unsigned int t196;
    unsigned int t197;
    unsigned int t198;
    unsigned int t199;
    unsigned int t200;
    unsigned int t201;
    unsigned int t202;
    unsigned int t203;
    unsigned int t204;
    unsigned int t205;
    unsigned int t206;
    unsigned int t207;
    char *t208;
    char *t209;
    char *t210;
    char *t211;
    char *t212;
    char *t213;
    unsigned int t214;
    unsigned int t215;
    char *t216;
    unsigned int t217;
    unsigned int t218;
    char *t219;
    unsigned int t220;
    unsigned int t221;
    char *t222;

LAB0:    t1 = (t0 + 2840U);
    t2 = *((char **)t1);
    if (t2 == 0)
        goto LAB2;

LAB3:    goto *t2;

LAB2:    xsi_set_current_line(2, ng0);
    t2 = (t0 + 1528U);
    t5 = *((char **)t2);
    t2 = ((char*)((ng1)));
    memset(t6, 0, 8);
    t7 = (t5 + 4);
    t8 = (t2 + 4);
    t9 = *((unsigned int *)t5);
    t10 = *((unsigned int *)t2);
    t11 = (t9 ^ t10);
    t12 = *((unsigned int *)t7);
    t13 = *((unsigned int *)t8);
    t14 = (t12 ^ t13);
    t15 = (t11 | t14);
    t16 = *((unsigned int *)t7);
    t17 = *((unsigned int *)t8);
    t18 = (t16 | t17);
    t19 = (~(t18));
    t20 = (t15 & t19);
    if (t20 != 0)
        goto LAB7;

LAB4:    if (t18 != 0)
        goto LAB6;

LAB5:    *((unsigned int *)t6) = 1;

LAB7:    memset(t22, 0, 8);
    t23 = (t6 + 4);
    t24 = *((unsigned int *)t23);
    t25 = (~(t24));
    t26 = *((unsigned int *)t6);
    t27 = (t26 & t25);
    t28 = (t27 & 1U);
    if (t28 != 0)
        goto LAB8;

LAB9:    if (*((unsigned int *)t23) != 0)
        goto LAB10;

LAB11:    t30 = (t22 + 4);
    t31 = *((unsigned int *)t22);
    t32 = *((unsigned int *)t30);
    t33 = (t31 || t32);
    if (t33 > 0)
        goto LAB12;

LAB13:    memcpy(t43, t22, 8);

LAB14:    memset(t4, 0, 8);
    t75 = (t43 + 4);
    t76 = *((unsigned int *)t75);
    t77 = (~(t76));
    t78 = *((unsigned int *)t43);
    t79 = (t78 & t77);
    t80 = (t79 & 1U);
    if (t80 != 0)
        goto LAB22;

LAB23:    if (*((unsigned int *)t75) != 0)
        goto LAB24;

LAB25:    t82 = (t4 + 4);
    t83 = *((unsigned int *)t4);
    t84 = *((unsigned int *)t82);
    t85 = (t83 || t84);
    if (t85 > 0)
        goto LAB26;

LAB27:    t93 = *((unsigned int *)t4);
    t94 = (~(t93));
    t95 = *((unsigned int *)t82);
    t96 = (t94 || t95);
    if (t96 > 0)
        goto LAB28;

LAB29:    if (*((unsigned int *)t82) > 0)
        goto LAB30;

LAB31:    if (*((unsigned int *)t4) > 0)
        goto LAB32;

LAB33:    memcpy(t3, t97, 8);

LAB34:    t209 = (t0 + 3240);
    t210 = (t209 + 56U);
    t211 = *((char **)t210);
    t212 = (t211 + 56U);
    t213 = *((char **)t212);
    memset(t213, 0, 8);
    t214 = 1U;
    t215 = t214;
    t216 = (t3 + 4);
    t217 = *((unsigned int *)t3);
    t214 = (t214 & t217);
    t218 = *((unsigned int *)t216);
    t215 = (t215 & t218);
    t219 = (t213 + 4);
    t220 = *((unsigned int *)t213);
    *((unsigned int *)t213) = (t220 | t214);
    t221 = *((unsigned int *)t219);
    *((unsigned int *)t219) = (t221 | t215);
    xsi_driver_vfirst_trans(t209, 0, 0);
    t222 = (t0 + 3160);
    *((int *)t222) = 1;

LAB1:    return;
LAB6:    t21 = (t6 + 4);
    *((unsigned int *)t6) = 1;
    *((unsigned int *)t21) = 1;
    goto LAB7;

LAB8:    *((unsigned int *)t22) = 1;
    goto LAB11;

LAB10:    t29 = (t22 + 4);
    *((unsigned int *)t22) = 1;
    *((unsigned int *)t29) = 1;
    goto LAB11;

LAB12:    t34 = (t0 + 1368U);
    t35 = *((char **)t34);
    memset(t36, 0, 8);
    t34 = (t35 + 4);
    t37 = *((unsigned int *)t34);
    t38 = (~(t37));
    t39 = *((unsigned int *)t35);
    t40 = (t39 & t38);
    t41 = (t40 & 1U);
    if (t41 != 0)
        goto LAB15;

LAB16:    if (*((unsigned int *)t34) != 0)
        goto LAB17;

LAB18:    t44 = *((unsigned int *)t22);
    t45 = *((unsigned int *)t36);
    t46 = (t44 & t45);
    *((unsigned int *)t43) = t46;
    t47 = (t22 + 4);
    t48 = (t36 + 4);
    t49 = (t43 + 4);
    t50 = *((unsigned int *)t47);
    t51 = *((unsigned int *)t48);
    t52 = (t50 | t51);
    *((unsigned int *)t49) = t52;
    t53 = *((unsigned int *)t49);
    t54 = (t53 != 0);
    if (t54 == 1)
        goto LAB19;

LAB20:
LAB21:    goto LAB14;

LAB15:    *((unsigned int *)t36) = 1;
    goto LAB18;

LAB17:    t42 = (t36 + 4);
    *((unsigned int *)t36) = 1;
    *((unsigned int *)t42) = 1;
    goto LAB18;

LAB19:    t55 = *((unsigned int *)t43);
    t56 = *((unsigned int *)t49);
    *((unsigned int *)t43) = (t55 | t56);
    t57 = (t22 + 4);
    t58 = (t36 + 4);
    t59 = *((unsigned int *)t22);
    t60 = (~(t59));
    t61 = *((unsigned int *)t57);
    t62 = (~(t61));
    t63 = *((unsigned int *)t36);
    t64 = (~(t63));
    t65 = *((unsigned int *)t58);
    t66 = (~(t65));
    t67 = (t60 & t62);
    t68 = (t64 & t66);
    t69 = (~(t67));
    t70 = (~(t68));
    t71 = *((unsigned int *)t49);
    *((unsigned int *)t49) = (t71 & t69);
    t72 = *((unsigned int *)t49);
    *((unsigned int *)t49) = (t72 & t70);
    t73 = *((unsigned int *)t43);
    *((unsigned int *)t43) = (t73 & t69);
    t74 = *((unsigned int *)t43);
    *((unsigned int *)t43) = (t74 & t70);
    goto LAB21;

LAB22:    *((unsigned int *)t4) = 1;
    goto LAB25;

LAB24:    t81 = (t4 + 4);
    *((unsigned int *)t4) = 1;
    *((unsigned int *)t81) = 1;
    goto LAB25;

LAB26:    t86 = (t0 + 1048U);
    t87 = *((char **)t86);
    t86 = (t0 + 1008U);
    t89 = (t86 + 72U);
    t90 = *((char **)t89);
    t91 = (t0 + 1208U);
    t92 = *((char **)t91);
    xsi_vlog_generic_get_index_select_value(t88, 1, t87, t90, 2, t92, 2, 2);
    goto LAB27;

LAB28:    t91 = (t0 + 1528U);
    t99 = *((char **)t91);
    t91 = ((char*)((ng2)));
    memset(t100, 0, 8);
    t101 = (t99 + 4);
    t102 = (t91 + 4);
    t103 = *((unsigned int *)t99);
    t104 = *((unsigned int *)t91);
    t105 = (t103 ^ t104);
    t106 = *((unsigned int *)t101);
    t107 = *((unsigned int *)t102);
    t108 = (t106 ^ t107);
    t109 = (t105 | t108);
    t110 = *((unsigned int *)t101);
    t111 = *((unsigned int *)t102);
    t112 = (t110 | t111);
    t113 = (~(t112));
    t114 = (t109 & t113);
    if (t114 != 0)
        goto LAB38;

LAB35:    if (t112 != 0)
        goto LAB37;

LAB36:    *((unsigned int *)t100) = 1;

LAB38:    memset(t116, 0, 8);
    t117 = (t100 + 4);
    t118 = *((unsigned int *)t117);
    t119 = (~(t118));
    t120 = *((unsigned int *)t100);
    t121 = (t120 & t119);
    t122 = (t121 & 1U);
    if (t122 != 0)
        goto LAB39;

LAB40:    if (*((unsigned int *)t117) != 0)
        goto LAB41;

LAB42:    t124 = (t116 + 4);
    t125 = *((unsigned int *)t116);
    t126 = *((unsigned int *)t124);
    t127 = (t125 || t126);
    if (t127 > 0)
        goto LAB43;

LAB44:    memcpy(t137, t116, 8);

LAB45:    memset(t98, 0, 8);
    t169 = (t137 + 4);
    t170 = *((unsigned int *)t169);
    t171 = (~(t170));
    t172 = *((unsigned int *)t137);
    t173 = (t172 & t171);
    t174 = (t173 & 1U);
    if (t174 != 0)
        goto LAB53;

LAB54:    if (*((unsigned int *)t169) != 0)
        goto LAB55;

LAB56:    t176 = (t98 + 4);
    t177 = *((unsigned int *)t98);
    t178 = *((unsigned int *)t176);
    t179 = (t177 || t178);
    if (t179 > 0)
        goto LAB57;

LAB58:    t204 = *((unsigned int *)t98);
    t205 = (~(t204));
    t206 = *((unsigned int *)t176);
    t207 = (t205 || t206);
    if (t207 > 0)
        goto LAB59;

LAB60:    if (*((unsigned int *)t176) > 0)
        goto LAB61;

LAB62:    if (*((unsigned int *)t98) > 0)
        goto LAB63;

LAB64:    memcpy(t97, t208, 8);

LAB65:    goto LAB29;

LAB30:    xsi_vlog_unsigned_bit_combine(t3, 1, t88, 1, t97, 1);
    goto LAB34;

LAB32:    memcpy(t3, t88, 8);
    goto LAB34;

LAB37:    t115 = (t100 + 4);
    *((unsigned int *)t100) = 1;
    *((unsigned int *)t115) = 1;
    goto LAB38;

LAB39:    *((unsigned int *)t116) = 1;
    goto LAB42;

LAB41:    t123 = (t116 + 4);
    *((unsigned int *)t116) = 1;
    *((unsigned int *)t123) = 1;
    goto LAB42;

LAB43:    t128 = (t0 + 1368U);
    t129 = *((char **)t128);
    memset(t130, 0, 8);
    t128 = (t129 + 4);
    t131 = *((unsigned int *)t128);
    t132 = (~(t131));
    t133 = *((unsigned int *)t129);
    t134 = (t133 & t132);
    t135 = (t134 & 1U);
    if (t135 != 0)
        goto LAB46;

LAB47:    if (*((unsigned int *)t128) != 0)
        goto LAB48;

LAB49:    t138 = *((unsigned int *)t116);
    t139 = *((unsigned int *)t130);
    t140 = (t138 & t139);
    *((unsigned int *)t137) = t140;
    t141 = (t116 + 4);
    t142 = (t130 + 4);
    t143 = (t137 + 4);
    t144 = *((unsigned int *)t141);
    t145 = *((unsigned int *)t142);
    t146 = (t144 | t145);
    *((unsigned int *)t143) = t146;
    t147 = *((unsigned int *)t143);
    t148 = (t147 != 0);
    if (t148 == 1)
        goto LAB50;

LAB51:
LAB52:    goto LAB45;

LAB46:    *((unsigned int *)t130) = 1;
    goto LAB49;

LAB48:    t136 = (t130 + 4);
    *((unsigned int *)t130) = 1;
    *((unsigned int *)t136) = 1;
    goto LAB49;

LAB50:    t149 = *((unsigned int *)t137);
    t150 = *((unsigned int *)t143);
    *((unsigned int *)t137) = (t149 | t150);
    t151 = (t116 + 4);
    t152 = (t130 + 4);
    t153 = *((unsigned int *)t116);
    t154 = (~(t153));
    t155 = *((unsigned int *)t151);
    t156 = (~(t155));
    t157 = *((unsigned int *)t130);
    t158 = (~(t157));
    t159 = *((unsigned int *)t152);
    t160 = (~(t159));
    t161 = (t154 & t156);
    t162 = (t158 & t160);
    t163 = (~(t161));
    t164 = (~(t162));
    t165 = *((unsigned int *)t143);
    *((unsigned int *)t143) = (t165 & t163);
    t166 = *((unsigned int *)t143);
    *((unsigned int *)t143) = (t166 & t164);
    t167 = *((unsigned int *)t137);
    *((unsigned int *)t137) = (t167 & t163);
    t168 = *((unsigned int *)t137);
    *((unsigned int *)t137) = (t168 & t164);
    goto LAB52;

LAB53:    *((unsigned int *)t98) = 1;
    goto LAB56;

LAB55:    t175 = (t98 + 4);
    *((unsigned int *)t98) = 1;
    *((unsigned int *)t175) = 1;
    goto LAB56;

LAB57:    t181 = (t0 + 1048U);
    t182 = *((char **)t181);
    t181 = (t0 + 1008U);
    t184 = (t181 + 72U);
    t185 = *((char **)t184);
    t186 = (t0 + 1208U);
    t187 = *((char **)t186);
    xsi_vlog_generic_get_index_select_value(t183, 1, t182, t185, 2, t187, 2, 2);
    memset(t180, 0, 8);
    t186 = (t183 + 4);
    t188 = *((unsigned int *)t186);
    t189 = (~(t188));
    t190 = *((unsigned int *)t183);
    t191 = (t190 & t189);
    t192 = (t191 & 1U);
    if (t192 != 0)
        goto LAB69;

LAB67:    if (*((unsigned int *)t186) == 0)
        goto LAB66;

LAB68:    t193 = (t180 + 4);
    *((unsigned int *)t180) = 1;
    *((unsigned int *)t193) = 1;

LAB69:    t194 = (t180 + 4);
    t195 = (t183 + 4);
    t196 = *((unsigned int *)t183);
    t197 = (~(t196));
    *((unsigned int *)t180) = t197;
    *((unsigned int *)t194) = 0;
    if (*((unsigned int *)t195) != 0)
        goto LAB71;

LAB70:    t202 = *((unsigned int *)t180);
    *((unsigned int *)t180) = (t202 & 1U);
    t203 = *((unsigned int *)t194);
    *((unsigned int *)t194) = (t203 & 1U);
    goto LAB58;

LAB59:    t208 = ((char*)((ng2)));
    goto LAB60;

LAB61:    xsi_vlog_unsigned_bit_combine(t97, 1, t180, 1, t208, 1);
    goto LAB65;

LAB63:    memcpy(t97, t180, 8);
    goto LAB65;

LAB66:    *((unsigned int *)t180) = 1;
    goto LAB69;

LAB71:    t198 = *((unsigned int *)t180);
    t199 = *((unsigned int *)t195);
    *((unsigned int *)t180) = (t198 | t199);
    t200 = *((unsigned int *)t194);
    t201 = *((unsigned int *)t195);
    *((unsigned int *)t194) = (t200 | t201);
    goto LAB70;

}


extern void work_m_09762400267826161765_3450105150_init()
{
	static char *pe[] = {(void *)Cont_2_0};
	xsi_register_didat("work_m_09762400267826161765_3450105150", "isim/tb_isim_beh.exe.sim/work/m_09762400267826161765_3450105150.didat");
	xsi_register_executes(pe);
}
